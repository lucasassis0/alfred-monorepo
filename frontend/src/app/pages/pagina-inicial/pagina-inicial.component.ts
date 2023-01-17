import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss'],
})
export class PaginaInicialComponent implements OnInit {
  qrCode: any;
  showQrCode = false;
  status: any;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.http.get<any>('/api/data').subscribe((data) => {
      this.qrCode = this.sanitizer.bypassSecurityTrustResourceUrl(
        data.qr.base64Qr
      );
    });
  }

  start() {
    this.http.get<any>('/api/controls/start').subscribe((data) => {
      console.log(data);
    });
  }

  stop() {
    this.http.get<any>('/api/controls/stop').subscribe((data) => {
      console.log(data);
    });
  }

  restart() {
    this.http.get<any>('/api/controls/restart').subscribe((data) => {
      console.log(data);
    });
  }

  show() {
    this.showQrCode = true;
  }

  getStatus() {
    this.http.get<any>('/api/connection').subscribe((data) => {
      this.status = data.status;
    });

    return this.status;
  }

  getQrCode() {
    if (this.status === 'CONNECTED') {
      this.showQrCode = false;
      return false;
    } else {
      this.showQrCode = true;
      return true;
    }
  }
}
