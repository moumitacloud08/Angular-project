import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {
    let savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  getRerservations(): Reservation[] {
    return this.reservations;
  }

  getRerservation(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(revervation: Reservation): void {
    this.reservations.push(revervation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.id == id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(updateReservation: Reservation) {
    let index = this.reservations.findIndex(
      (res) => res.id == updateReservation.id,
    );
    this.reservations[index] = updateReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
