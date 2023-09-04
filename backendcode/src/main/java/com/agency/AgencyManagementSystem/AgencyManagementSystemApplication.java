package com.agency.AgencyManagementSystem;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import java.util.Properties;
import org.springframework.core.env.Environment;

@SpringBootApplication
public class AgencyManagementSystemApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(AgencyManagementSystemApplication.class, args);
	}
	
	@Autowired
	private Environment env;
	
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
     
				String urls = env.getProperty("cors.urls");
                CorsRegistration reg = registry.addMapping("/api/**");
                for(String url: urls.split(",")) {
                    reg.allowedOrigins(url);
                }
            }
        };


}

}
