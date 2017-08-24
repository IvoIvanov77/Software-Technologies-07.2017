package imdb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import imdb.bindingModel.FilmBindingModel;
import imdb.entity.Film;
import imdb.repository.FilmRepository;

import java.util.List;

@Controller
public class FilmController {

	private final FilmRepository filmRepository;

	@Autowired
	public FilmController(FilmRepository filmRepository) {
		this.filmRepository = filmRepository;
	}

	@GetMapping("/")
	public String index(Model model) {

	    List<Film> films = this.filmRepository.findAll();

        model.addAttribute("view", "film/index")
        .addAttribute("films", films);

        return "base-layout";
	}

	@GetMapping("/create")
	public String create(Model model) {
        Film film = new Film();
        model.addAttribute("view", "film/create")
                .addAttribute("film", film);

        return "base-layout";
	}

	@PostMapping("/create")
	public String createProcess(Model model, FilmBindingModel filmBindingModel) {
        Film film = new Film(
                filmBindingModel.getName(),
                filmBindingModel.getGenre(),
                filmBindingModel.getDirector(),
                filmBindingModel.getYear());
        if(!isFormValid(filmBindingModel)){
            model.addAttribute("film", film);
            model.addAttribute("view", "film/create");
            return "base-layout";
        }
        filmRepository.saveAndFlush(film);
        return "redirect:/";
	}

	@GetMapping("/edit/{id}")
	public String edit(Model model, @PathVariable int id) {
	    if(!this.filmRepository.exists(id)){
	        return "redirect:/";
        }
		Film film = this.filmRepository.findOne(id);
	    model.addAttribute("film", film)
                .addAttribute("view", "film/edit");
        return "base-layout";
	}

	@PostMapping("/edit/{id}")
	public String editProcess(Model model, @PathVariable int id, FilmBindingModel filmBindingModel) {
        if(!this.filmRepository.exists(id)){
            return "redirect:/";
        }

        Film film = this.filmRepository.findOne(id);
        film.setName(filmBindingModel.getName());
        film.setGenre(filmBindingModel.getGenre());
        film.setDirector(filmBindingModel.getDirector());
        film.setYear(filmBindingModel.getYear());

        if(!isFormValid(filmBindingModel)){
            model.addAttribute("film", film);
            model.addAttribute("view", "film/edit");
            return "base-layout";
        }

        this.filmRepository.saveAndFlush(film);
        return "redirect:/";
	}

	@GetMapping("/delete/{id}")
	public String delete(Model model, @PathVariable int id) {
        if(!this.filmRepository.exists(id)){
            return "redirect:/";
        }
        Film film = this.filmRepository.findOne(id);
        model.addAttribute("film", film)
                .addAttribute("view", "film/delete");
        return "base-layout";
	}

	@PostMapping("/delete/{id}")
	public String deleteProcess(@PathVariable int id) {
        if(!this.filmRepository.exists(id)){
            return "redirect:/";
        }

        this.filmRepository.delete(id);
        this.filmRepository.flush();
        return "redirect:/";
	}

	private boolean isFormValid(FilmBindingModel model){
	    return StringUtils.hasText(model.getName()) &&
                StringUtils.hasText(model.getGenre()) &&
                StringUtils.hasText(model.getDirector()) &&
                model.getYear() != null;

    }
}
