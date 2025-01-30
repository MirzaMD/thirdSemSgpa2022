export function SgpaCal(marks:number[]):number{
let mathCredits:number=FourCredits(marks[0]);
let ddcoCredits:number=FourCredits(marks[1]);
let osCredits:number=FourCredits(marks[2]);
let dsaCredits:number=ThreeCredits(marks[1]);
let cppCredits:number=ThreeCredits(marks[4]);
let labsCredit:number=OneCredits(marks[5]);
let excelCredit:number=OneCredits(marks[6]);

let sgpa=((mathCredits+ddcoCredits+osCredits+dsaCredits+cppCredits+labsCredit+excelCredit)/200)*10
return parseFloat(sgpa.toFixed(2));
}
function FourCredits(m:number):number{
    if(m>90)
       return (10*4);
      else if(m>80 && m<90)
      return (9*4)
      else if(m>70 && m<80)
      return (8*4)
      else if(m>60 && m<70)
      return (7*4)
     else if(m>50 && m<60)
      return (6*4)
     else if(m>40 && m<50)
      return (5*4)
     else if(m>30 && m<40)
      return 4*4
     else if(m>20 && m<30)
      return 3*4
     else if(m>10 && m<20)
      return 2*4
     else 
     return 4
}
function ThreeCredits(m:number):number{
    if(m>90)
       return (10*3);
      else if(m>80 && m<90)
      return (9*3)
      else if(m>70 && m<80)
      return (8*3)
      else if(m>60 && m<70)
      return (7*3)
     else if(m>50 && m<60)
      return (6*3)
     else if(m>40 && m<50)
      return (5*3)
     else if(m>30 && m<40)
      return 4*3
     else if(m>20 && m<30)
      return 3*3
     else if(m>10 && m<20)
      return 2*3
     else 
     return 3
}
function OneCredits(m:number):number{
    if(m>90)
       return (10*1);
      else if(m>80 && m<90)
      return (9*1)
      else if(m>70 && m<80)
      return (8*1)
      else if(m>60 && m<70)
      return (7*1)
     else if(m>50 && m<60)
      return (6*1)
     else if(m>40 && m<50)
      return (5*1)
     else if(m>30 && m<40)
      return 4*1
     else if(m>20 && m<30)
      return 3*1
     else if(m>10 && m<20)
      return 2*1
     else 
     return 1
}