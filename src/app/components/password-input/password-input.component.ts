import {Component} from '@angular/core'

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent{
  password: string = ''
  passwordStrength: string = ''

  calculatePasswordStrength() {
    if (this.password.length === 0) {
      this.passwordStrength = '';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'weak';
    } else if(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(this.password)) {
      this.passwordStrength = "strong"
    } else if(/^(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*])/.test(this.password)) {
      this.passwordStrength = "medium"
    } else if(/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(this.password)) {
      this.passwordStrength = "medium"
    } else if(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(this.password)) {
      this.passwordStrength = "medium"
    } else if (/^(?=.*[a-zA-Z])/.test(this.password) || /^(?=.*[0-9])/.test(this.password) || /^(?=.*[!@#\$%\^&\*])/.test(this.password)) {
      this.passwordStrength = 'easy';
    }
   }
   
}