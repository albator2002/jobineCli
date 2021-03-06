/**
 * Created by Alain on 2016-09-30.
 */
export class Profile {
    public id: string;
    public data: {
        firstname: string,
        lastname: string,
        email: string,       
        password: string,
		location:{
            lng:number,
            lat:number,
        },
        worktypes:string,
        created: string,
        available:boolean
    };
    constructor(private _id:string,private _firstName:string,private _lastName:string,private _email:string,private _available:boolean,private _password:string,_lng:number,_lat:number,_worktypes:string){
        this.id = _id;
        this.data =  {
            "firstname":_firstName,
            "lastname":_lastName,
            "email":_email,           
            "password":_password,
			"location": {
                "lng": _lng,
                "lat": _lat

            },
            "worktypes":_worktypes,
            "created":new Date().toDateString(),
            "available":_available
        };


    }
}