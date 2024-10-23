var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var nodemailer=require("nodemailer");
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
			user: 'orderistaFoods@gmail.com',
			pass: 'ceat@4416'}
	});

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/FoodDelieveryApp", { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);

function mongoConnected() {
	
    app.post("/loginUser", function(req, res){
		//var myData1 = new Login_data(req.body);
		db.collection('Login_Details').findOne({$and:[{email:req.body.email},{password:req.body.password}]},function(err,result){
			if(err)
			{
				console.log(err);
			}
			else
			{
				if(!result){
					console.log(result);
					res.json({
						success:"no",
						id:null
					})
				}
				else{
					console.log(result);
					res.json({
						success:"yes",
						id:result._id,
						email:result.email
					})
				}
			}
			});
	});
	
	app.post("/registerUser", function(req, res){
		db.collection('Login_Details').findOne({email:req.body.email},function(err,loginData){
			if(!loginData)
			{
				db.collection('Login_Details').insertOne({email:req.body.email,password:req.body.password},function(err){
					if (err) 
					{
						res.status(400);
						//res.send({'message':'Record Not Inserted In Login_Details...'});
						res.json({'message':'Failure'});
					}
					else {
						console.log("Record Inserted In Login_Details...");
						db.collection('User_Details').insertOne({email:req.body.email,
																password:req.body.password,
																firstName:req.body.firstName,
																lastName:req.body.lastName,
																contactNumber:req.body.contactNumber,
																addresses:[{address1:req.body.addresses[0].address1,
																			landmark:req.body.addresses[0].landmark,
																			area:req.body.addresses[0].area,
																			city:req.body.addresses[0].city,
																			state:req.body.addresses[0].state,
																			pincode:req.body.addresses[0].pincode,
																			address_type:req.body.addresses[0].type}]},function(err){
																				if (err) {
																					res.status(400);
																					res.json({'message':'Record Not Inserted In User_Details..'});
																				}
																				else
																				{
																					console.log('Record Inserted In User_Details..');
																					var uname=req.body.firstName+" "+req.body.lastName
																					sendMailToUserOnRegister(uname,req.body.email);
																					res.json({'message':'Record Inserted'});
																				}
																			});	
						
					}
				});
			}
			else{
				console.log("Already exist");
				res.json({'message':'exists'});
			}
		})
	});

	app.post("/getHotels",function(req,res){
		console.log(req.body.city)
		db.collection('Hotel_Details').find({city:req.body.city}).toArray(function(err,hotels){
			if(err)
			{
				res.status(400);
				res.json({'message':'Failure'});
			}
			else
			{
				if(hotels)
				{
					console.log(hotels)
					res.send(hotels)
				}
				else
				{
					console.log('Record Not Found..')
					res.status(400)
					res.json({'message':'Failure'})
				}
			}
		});
	});

	app.post("/userHome",function(req,res){
		console.log(req.body.email)
		db.collection('User_Details').findOne({email:req.body.email},function(err,result){
			if (err) 
			{
				res.status(400);
				res.json({'message':'Failure'});
			}
			else
			{
				if(result)
				{
					console.log("Record found");
					console.log(result)
					res.send(result);
				}
				else
				{
					console.log("not found")
					res.send()
				}
		 	}
	 	});
	 });
 
	 app.post("/manageUser",function(req,res){
		db.collection('User_Details').find({email:req.body.email},function(err,result){
			if (err) 
			{
				res.status(400);
				res.json({'message':'Failure'});
			}
			if(result)
			{
				if(req.body.password!=result.password){
					db.collection('User_Details').update({email:req.body.email},{$set:{password:req.body.password}})
					db.collection('Login_Details').update({email:req.body.email},{$set:{password:req.body.password}})
				}
				if(req.body.firstName!=result.firstName)
					db.collection('User_Details').update({email:req.body.email},{$set:{firstName:req.body.firstName}})
				if(req.body.lastName!=result.lastName)
					db.collection('User_Details').update({email:req.body.email},{$set:{lastName:req.body.lastName}})
				if(req.body.contactNo!=result.contactNo)
					db.collection('User_Details').update({email:req.body.email},{$set:{contactNo:req.body.contactNo}})
				if(req.body.addresses[0].address1!=result.addresses[0].address1)
					db.collection('User_Details').update({email:req.body.email},{$set:{addresses:[{address1:req.body.addresses[0].address1}]}})
				if(req.body.addresses[0].landmark!=result.addresses[0].landmark)
					db.collection('User_Details').update({email:req.body.email},{$set:{addresses:[{landmark:req.body.addresses[0].landmark}]}})
				if(req.body.addresses[0].area!=result.addresses[0].area)
					db.collection('User_Details').update({email:req.body.email},{$set:{addresses:[{area:req.body.addresses[0].area}]}})
				if(req.body.addresses[0].city!=result.addresses[0].city)
					db.collection('User_Details').update({email:req.body.email},{$set:{addresses:[{city:req.body.addresses[0].city}]}})
				if(req.body.addresses[0].state!=result.addresses[0].state)
					db.collection('User_Details').update({email:req.body.email},{$set:{addresses:[{state:req.body.addresses[0].state}]}})
				if(req.body.addresses[0].pincode!=result.addresses[0].pincode)
					db.collection('User_Details').update({email:req.body.email},{$set:{pincode:[{address1:req.body.addresses[0].pincode}]}})
			}
		});
	 });
 
	 app.post("/deleteUser",function(req,res){
		db.collection('User_Details').deleteOne({email:req.body.email},function(err){
			if (err) 
			{
				res.status(400);
				res.json({'message':'Failure'});
			}
			else
			{
				console.log("User Deleted")
			}
		});
		db.collection('Login_Details').deleteOne({email:req.body.email},function(err){
			if (err) 
			{
				res.status(400);
				res.json({'message':'Failure'});
			}
		}); 
	});

	app.post("/insertOrder",function(req,res){
		console.log(req.body)
		db.collection('Order_Details').insertOne(req.body,function(err){
			if(err)
			{
				res.status(400);
				res.json({'message':'Failure'});				
			}
			else
			{
				db.collection('User_Details').findOne({email:req.body.userEmail},function(err,result){
					if(err)
					{
						res.status(400);
						res.json({'message':'Failure'});						
					}
					else
					{
						if(result)
						{
							var uname=result.firstName+" "+result.lastName;
							sendMailToUserOnOrderPlace(uname,result.email);
							sendMailToHotelOnOrderPlace(req.body.hotelName,req.body,req.body.hotelEmail,result.addresses[0],uname);
							res.send({'message':'Success'});
						}
						else
						{
							res.status(400);
							res.json({'message':'Failure'});							
						}
					}
				});
			}
		});
	});
}
app.listen(8000,function(){
    console.log('Lisning on 8000');
});

function sendMailToUserOnRegister(name,emailId)
{
	var mailOptions= {
		from: 'orderistaFoods@gmail.com',
		to: emailId,
		subject: 'Welcome To Orderista...',
		text: "Hi, "+name+' .\nYou have successfully register to Orderista.Now go to our website and enjoy our Delicious Services..'
	};
	transporter.sendMail(mailOptions, function(error, info){
		if (error) 
		{
			console.log(error);
		}
		 else {
			 console.log('Email sent: ' + info.response);
			}
		});
}

function sendMailToUserOnOrderPlace(name,emailId)
{
	var mailOptions= {
		from: 'orderistaFoods@gmail.com',
		to: emailId,
		subject: 'Order Is Placed Successfully...',
		text: "Hi, "+name+' .\nYour Order has been successfully place.Our Delievery Boy will be there on your doors with your delicious food....'
	};
	transporter.sendMail(mailOptions, function(error, info){
		if (error) 
		{
			console.log(error);
		}
		 else {
			 console.log('Email sent: ' + info.response);
			}
		});
}

function sendMailToHotelOnOrderPlace(name,order,emailId,address,uname)
{
	msg="Hi, "+order.hotelName+' .\nYou have an order for following foods :- \n';

	console.log(order.items.length)
	for(i=0;i<order.items.length;i++)
	{
		msg=msg+"Item Name - "+order.items[i].itemName+" :-\nQuantity - "+order.items[i].quantity+"\n";
	}
	msg=msg+"Send Delievery Boy with order to following address :-\nTo "+uname+",\n"+address.address1+",\n"+address.landmark+",\n"+address.area+",\n"+address.city+" - "+address.pincode+",\n"+address.state+".";
	var mailOptions= {
		from: 'orderistaFoods@gmail.com',
		to: emailId,
		subject: 'Order To Serve...',
		text: msg
	};
	transporter.sendMail(mailOptions, function(error, info){
		if (error) 
		{
			console.log(error);
		}
		 else {
			 console.log('Email sent: ' + info.response);
			}
		});
}