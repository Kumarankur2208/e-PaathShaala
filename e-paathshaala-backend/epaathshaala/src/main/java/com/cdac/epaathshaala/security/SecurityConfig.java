//package com.cdac.epaathshaala.security;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@Configuration
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//	
//	
//	@Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//            .cors()
//                .and()
//            .csrf()
//                .disable()
//            .exceptionHandling()
//                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
//                .and()
//            .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
//            .authorizeRequests()
//                .antMatchers("/api/v1/signup", "/api/v1/login") // Add your bypassed URLs here
//                .permitAll()
//                .antMatchers("/api/v1/admin/**") // Example: Bypass URLs starting with /api/v1/admin/
//                .hasRole("ADMIN")
//                .anyRequest()
//                .authenticated();
//
//        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
//    }
//
//}
