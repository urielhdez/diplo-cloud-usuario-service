package unam.diplomado.pixup.usuarioservice.service;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import unam.diplomado.pixup.usuarioservice.domain.Domicilio;
import unam.diplomado.pixup.usuarioservice.domain.Usuario;
import unam.diplomado.pixup.usuarioservice.domain.UsuarioAlreadyExistsException;
import unam.diplomado.pixup.usuarioservice.repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	private static final Logger LOG = 
			LoggerFactory.getLogger(UsuarioServiceImpl.class);

	@Override
	public Usuario registrarUsuario(Usuario usuario, Domicilio domicilio) {
		// validacion usuario existente
		Optional<Usuario> usuarioExistente = 
				usuarioRepository.findByEmail(usuario.getEmail());
		if (usuarioExistente.isPresent()) {
			throw new UsuarioAlreadyExistsException(usuario.getEmail());
		}
		
		// guardar usuario
		usuario.getDomicilios().add(domicilio);
		usuarioRepository.save(usuario);
		LOG.info("Usuario Registrado: " + usuario);
		
		return usuario;
	}

}
