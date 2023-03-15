package com.douzone.emaillist.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.emaillist.dto.JsonResult;
import com.douzone.emaillist.repository.EmaillistRepository;
import com.douzone.emaillist.vo.EmaillistVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private EmaillistRepository emaillistRepository;

	/*
     *  전체 이메일 리스트
     */
	@GetMapping("/emaillist")
	public ResponseEntity<JsonResult> emailList() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.findAll()));
	}
	
	/*
     *  검색어에 따른 이메일 리스트
     */
	@PostMapping({"/emaillist", "/emaillist/{k}"})
	public ResponseEntity<JsonResult> searchEmail(@PathVariable("k") Optional<String> k) {
		String keyword = k.orElse("");
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.findAllByKeyword(keyword)));
	}
	
	/*
     *  이메일 추가
     */
	@PostMapping("/email")
	public ResponseEntity<JsonResult> addEmail(@RequestBody EmaillistVo emaillistVo){
		emaillistRepository.insert(emaillistVo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistVo));
	}
	
	/*
     *  이메일 삭제
     */
	@DeleteMapping("/email/{no}")
	public ResponseEntity<JsonResult> deleteEmail(@PathVariable("no") Long no){
		emaillistRepository.delete(no);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
}
