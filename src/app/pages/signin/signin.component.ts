import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../core/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {XkoolUser} from "../../model/xkool-user.model";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userForm: FormGroup;
  formErrors = {
    userName: '',
    password: ''
  };
  validationMessages = {
    userName: {
      required: '请输入您的用户名',
      email: '请输入正确的用户名'
    },
    password: {
      required: '请输入您的密码',
      pattern: '密码中必须包含数字和字母',
      minlength: '请输入大于4个字符',
      maxlength: '请输入小于25个字符'
    }
  };

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: [
        '',
        [
          // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  signInWithGoogle() {
    this.authService.googleLogin().then(() => this.afterSignIn());
  }

  signInWithGithub() {
    this.authService.githubLogin().then(() => this.afterSignIn());
  }

  loginWithPassword() {
    this.authService
      .passwordLogin(this.userForm.value['userName'], this.userForm.value['password'])
      .subscribe((user: XkoolUser) => {
        if (user) {
          this.authService.setCurrentUser(user);
          this.router.navigate(['/pages/user']);
        } else {
          console.log('login failed');
        }
      });
    // .catch(error => console.log('邮箱登录出错：', error));
    // this.authService
    //   .passwordLogin(this.userForm.value['userName'], this.userForm.value['password']);
    // .catch(error => console.log('邮箱登录出错：', error));
  }

  signInAnonymously() {
    this.authService.anonymousLogin().then(() => this.afterSignIn());
  }

  login() {
    this.loginWithPassword();
  }

  private afterSignIn() {
    this.router.navigate(['/']);
  }
}
