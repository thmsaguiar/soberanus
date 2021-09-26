//Arquivo de teste Login
import { LoginPageForm } from './login.page.form';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('LoginPageForm', () => {
	let loginPageForm: LoginPageForm;
	let form: FormGroup;

	beforeEach(() =>{
		loginPageForm = new LoginPageForm(new FormBuilder());
		form = loginPageForm.createForm();
	})

	it('should create login form empty', () => {		

		expect(form).not.toBeNull();
		expect(form.get('user')).not.toBeNull();
		expect(form.get('user').value).toEqual("");
		expect(form.get('user').valid).toBeFalsy();
		expect(form.get('password')).not.toBeNull();
		expect(form.get('password').value).toEqual("");
		expect(form.get('password').valid).toBeFalsy();
		
	})

	it('should have user invalid if user is nor user', () => {
		form.get('user').setValue('invalid user');

		expect(form.get('user').valid).toBeFalsy();
	})

	it('should have user valid if user is valid', () => {
		form.get('user').setValue('valiuser');

		expect(form.get('user').valid).toBeTruthy();
	})


	it('should have a form valid', () => {
		form.get('user').setValue('valiuser');
		form.get('password').setValue('qualquer');
		expect(form.valid).toBeTruthy();
	})
})