import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: object[] = [
    { name: 'Duct Tape', mass: 0.5 },
    { name: 'Space Camera', mass: 20 },
    { name: 'Food', mass: 150 },
    { name: 'Oxygen Tanks', mass: 400 },
    { name: 'AE-35 Unit', mass: 5 },
    { name: 'ISS Supplies', mass: 800 },
    { name: 'Water', mass: 250 },
    { name: 'Satellite', mass: 1200 },
    { name: 'R2 Unit', mass: 32 },
  ];
  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;
  // massBudgetRemaining: number = this.maximumAllowedMass - this.cargoMass;
  // lowMassBudget: boolean = this.massBudgetRemaining <= 200;

  constructor() { }

  ngOnInit() { }

  // Code your addItem function here:
  /*It should take an equipment object as a parameter. Done
    It should add the equipment object to the cargoHold array. Done
    It should increase the cargoMass variable by the mass of the new equipment. Done
    It should return true or false depending on whether cargoMass is within 200 kg of maximumAllowedMass */
  // {}
  addItem(equipmentItem) {
    this.cargoHold.push(equipmentItem);
    this.cargoMass += equipmentItem.mass;
    // opted not to return anything for a better solution later
  }

  disableButton(equipmentItem): boolean {
    const haveReachedItemLimit = this.cargoHold.length === this.maxItems;
    const reachingMassLimit = this.cargoMass + equipmentItem.mass > this.maximumAllowedMass;
    return haveReachedItemLimit || reachingMassLimit;
  }

}
