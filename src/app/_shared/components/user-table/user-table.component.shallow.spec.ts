import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTableComponent } from './user-table.component';
import { MaterialModule } from '../../../material.module';
import { UserService } from '../../../user/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Shallow test', () => {
  describe('UserTableComponent', () => {
    let component: UserTableComponent;
    let fixture: ComponentFixture<UserTableComponent>;

    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          providers: [UserService],
          imports: [MaterialModule, HttpClientModule, BrowserAnimationsModule],
          declarations: [UserTableComponent]
        }).compileComponents();
      })
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(UserTableComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    test('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});