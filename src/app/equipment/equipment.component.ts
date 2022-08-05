import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class equipmentComponent implements OnInit {

  equipmentBeingEdited: object = null;
  inEquipment: boolean = false

  equipment: object[] = [
    {name: "Habitat dome"},
    {name: "Drones"},
    {name: "Food containers"},
    {name: "Oxygen tanks"}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    for (let i=0; i < this.equipment.length; i++) {
        if(this.equipment[i]['name'] === memberName) {
            this.inEquipment = true;
        }
    }
    if (!this.inEquipment) {
        this.equipment.push({name: memberName, firstMission: isFirst});
    }
    this.inEquipment = false;
  }
  
  remove(member: object) {
    let index = this.equipment.indexOf(member);
    this.equipment.splice(index, 1);
  }
  
  edit(member: object) {
    this.equipmentBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.equipmentBeingEdited = null;
    }
    

}