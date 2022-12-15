class Clock{
    constructor(hour, min, sec){
        this.hour=hour;
        this.min=min;
        this.sec=sec;
    }
    getTime(){
        if((this.hour>23)||(this.min>59)||(this.sec>59)){
            console.log("invalid");
        }
        else if(this.hour>12){
            let a=1;
            for(let i=0; i<12; i++){
                if(12+a==this.hour){
                    this.hour=a;
                    break;
                }       
                a++;
            }
            console.log("Time " + this.hour + " : " + this.min + " : " + this.sec + " PM");
        }
        else{
            console.log("Time " + this.hour + " : " + this.min + " : " + this.sec + " AM");
        }
    }
}

const obj = new Clock(15,45,30);
obj.getTime();





class DayFinder{
    constructor(date,mon,year){
        this.date=date;
        this.mon=mon;
        this.year=year;
    }
    
    getDay(){
        let oddDays=0;
        let oddMon = [3,0,3,2,3,2,3,3,2,3,2];
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let temp1 = this.year;
        this.year = this.year-1;
        this.year = this.year % 400;
        if((this.year>300)&&(this.year<400)){

			this.year = this.year - 300;

			oddDays = 1 ; 
		}
		else if ((this.year>200)&&(this.year<300)) {

			this.year = this.year - 200;

			oddDays = 3 ; 
		}
		else if ((this.year>100)&&(this.year<200)) {

			this.year = this.year - 100;

			oddDays = 5 ; 
		}
		else if((this.year>0)&&(this.year<100)){

			oddDays = 0;
		}
        let temp2 = this.year;

        if(this.year>3){

		this.year = this.year / 4;

		let normalYear = temp2 - this.year;

		oddDays += Math.floor(normalYear + (this.year * 2));
        }
        else{
            oddDays += temp2;
        }

         if(((temp1 % 4 == 0)&&(temp1 % 100 != 0)) || (temp1 % 400 == 0)){

            for(let i=0; i<this.mon-1; i++){
                oddDays += oddMon[i];
            }
            if(this.mon > 2){
                oddDays++;
            }
         }
         else{

            for(let i=0; i<this.mon-1; i++){
                oddDays += oddMon[i];
            }
         }
         oddDays += this.date;
         oddDays = oddDays % 7;
         console.log(oddDays);
         console.log(days[oddDays]);
    }
}

const obj2 = new DayFinder(8,12,2028);
obj2.getDay();