import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AsambleaService } from 'src/app/services/asamblea.service';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  initLoading = true; // bug
  loadingMore = true;
  data: any[] = [];
  list: Array<any> = [{ loading: true }, { loading: true }, { loading: true }, { loading: true }];

  constructor(private msg: NzMessageService, private asambleaService: AsambleaService, private router: Router,) { }

  ngOnInit(): void {
    this.onLoadData()
  }

  async onLoadData() {
    this.list = await this.asambleaService.getRemoteReports()
    this.initLoading = false;
    this.loadingMore = false;
    console.log(this.list)
  }

  async onLoadMore() {
    console.log('aaaaa', await this.asambleaService.getRemoteReports());
  }

  navigateToEdit(id: any) {
    this.router.navigate(['/', 'app', 'form', 'questionary', { id }]);
  }

  navigateToView(id: any) {
    const url = this.router.serializeUrl(this.router.createUrlTree(['/record-view'], { queryParams: { id } }));
    window.open(url, '_blank');
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }
}
