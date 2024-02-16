import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AsitenciaService {
  constructor(private firestore: AngularFirestore) {}

  async registerAttendance(userEmail: string, seccion: string, carrera: string, fecha: string) {
    const idAsistencia = this.firestore.createId();
    const attendanceData = {
      id_asistencia: idAsistencia,
      asistio: true,
      seccion: seccion,
      carrera: carrera,
      fecha: fecha,
      userEmail: userEmail // Agregar el correo electrónico del usuario a los datos de asistencia
    };
    return this.firestore.collection('Asistencia').doc(idAsistencia).set(attendanceData);
  }
}