import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../Services/Company.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './Profile.component.html',
  styleUrl: './Profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent
{
  companyList = this.companyService.getCompanies();


  constructor(private companyService: CompanyService) {
    this.companyList().forEach(element => {
      console.log(`${element.Name}: ${element.Id}`);

    });
  }

}
