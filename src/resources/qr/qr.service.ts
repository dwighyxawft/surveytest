// src/qr/qr.service.ts
import { Injectable } from '@nestjs/common';
import * as QRCodeImport from 'qrcode';
const QRCode = QRCodeImport as typeof import('qrcode');
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class QrService {
  async generateQrCode(): Promise<{ qrCode: string; id: string }> {
    const id = uuidv4();
    const url = `https://dwighyxawft.github.io/qrmovies/movies.html/${id}`;
    const qrCode: string = await QRCode.toDataURL(url);

    return { qrCode, id };
  }
}
