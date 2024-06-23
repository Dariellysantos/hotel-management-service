const mockingoose = require("mockingoose");
const httpMocks = require('node-mocks-http');
const bookingController = require("./bookingController")
const BookingSchema = require('../models/bookingSchema');

describe('updateStatus', () => {
   beforeEach(() => {
       mockingoose.resetAll();
       jest.clearAllMocks();
   });

   it('should update booking status successfully', async () => {
       const _doc =
       {
           _id: "667791ec51f6adf318f79775",
           name: "Darielly Santos",
           emailClient: "email@email.com.br",
           roomNumber: "9931",
           amountToPay: 1000.8,
           dateOfStay: [
               "12/10/2024",
               "20/10/2024"
           ],
           status: "CONFIRMADO",
           createdAt: "2024-06-23T03:09:19.897Z",
           updatedAt: "2024-06-23T03:09:19.897Z",
           deletedAt: "2024-06-23T03:09:19.897Z",
           __v: 0
       };

       mockingoose(BookingSchema).toReturn([_doc], 'find');

       const request = httpMocks.createRequest({
           method: 'PUT',
           url: '/booking/667791ec51f6adf318f79775',
           params: {
               id: '667791ec51f6adf318f79775'
           },
           body: {
               status: 'CONFIRMADO'
           }
       });

       const response = httpMocks.createResponse();

       await bookingController.updateStatus(request, response);

       expect(response.statusCode).toBe(200);
       expect(JSON.parse(response._getData())).toEqual({
           found: {
               _id: "667791ec51f6adf318f79775",
               name: "Darielly Santos",
               emailClient: "email@email.com.br",
               roomNumber: "9931",
               amountToPay: 1000.8,
               dateOfStay: [
                   "12/10/2024",
                   "20/10/2024"
               ],
               status: "CONFIRMADO",
               createdAt: "2024-06-23T03:09:19.897Z",
               updatedAt: "2024-06-23T03:09:19.897Z",
               deletedAt: "2024-06-23T03:09:19.897Z",
               __v: 0
           },
           mensagem: "Booking status updated successfully",
       });
   });

   it('should return 404 if booking not found', async () => {
       mockingoose(BookingSchema).toReturn([], 'find');

       const request = httpMocks.createRequest({
           method: 'PUT',
           url: '/booking/667791ec51f6adf318f71111',
           params: {
               id: '667791ec51f6adf318f71111'
           },
           body: {
               status: 'CONFIRMADO'
           }
       });

       const response = httpMocks.createResponse();

       await bookingController.updateStatus(request, response);

       expect(response.statusCode).toBe(404);
       expect(JSON.parse(response._getData())).toEqual({
           message: "Booking not found.",
           code: "NOT_FOUND_ERROR",
       });
   });

   it('should handle internal errors', async () => {
       mockingoose(BookingSchema).toReturn(new Error('Internal error'), 'find');

       const request = httpMocks.createRequest({
           method: 'PUT',
           url: '/booking/997791ec51f6adf318f71221',
           params: {
               id: '997791ec51f6adf318f71221'
           },
           body: {
               status: 'CONFIRMADO'
           }
       });

       const response = httpMocks.createResponse();

       await bookingController.updateStatus(request, response);

       expect(response.statusCode).toBe(500);
       expect(JSON.parse(response._getData())).toEqual({
           message: "Internal error.",
           code: "INTERNAL_SERVER_ERROR",
           data: null,
       });
   });
});

describe('createBooking', () => {
   beforeEach(() => {
       mockingoose.resetAll();
       jest.clearAllMocks();
   });


   it('should create a booking successfully', async () => {
       const bookingData = {
           name: "Darielly Santos",
           emailClient: "email@email.com.br",
           roomNumber: "631",
           amountToPay: 1000.80,
           dateOfStay: [
               "12/10/2024",
               "20/10/2024"
           ],
           status: "CONFIRMADO"
       };

       const savedBooking = {
           ...bookingData,
           _id: "667790f3c5ff0a4198db5e38",
           createdAt: "2024-06-23T03:09:19.897Z",
           updatedAt: "2024-06-23T03:09:19.897Z",
           deletedAt: "2024-06-23T03:09:19.897Z",
       };

       mockingoose(BookingSchema).toReturn(savedBooking, 'save');

       const request = httpMocks.createRequest({
           method: 'POST',
           url: '/booking',
           body: bookingData,
       });

       const response = httpMocks.createResponse();

       await bookingController.createBooking(request, response);

       expect(response.statusCode).toBe(201);
       expect(JSON.parse(response._getData())).toEqual({
           message: "Booking registered successfully!",
           sevedBooking: savedBooking
       });
   });


   it('should return 500 if there is an internal error', async () => {
       const bookingData = {
           name: "Darielly Santos",
           emailClient: "email@email.com.br",
           roomNumber: "631",
           amountToPay: 1000.80,
           dateOfStay: [
               "12/10/2024",
               "20/10/2024"
           ],
           status: "CONFIRMADO"
       };

       mockingoose(BookingSchema).toReturn(new Error('Internal error'), 'save');

       const request = httpMocks.createRequest({
           method: 'POST',
           url: '/booking',
           body: bookingData,
       });

       const response = httpMocks.createResponse();

       await bookingController.createBooking(request, response);

       expect(response.statusCode).toBe(500);
       expect(JSON.parse(response._getData())).toEqual({
           message: "Internal error.",
           code: "INTERNAL_SERVER_ERROR",
       });
   });
});


describe('bookingListByDate', () => {
    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks();
    });

    it('should return bookings within the specified date range', async () => {
        const bookings = [
            {
                _id: "667791ec51f6adf318f79775",
                name: "Darielly Santos",
                emailClient: "email@email.com.br",
                roomNumber: "9931",
                amountToPay: 1000.8,
                dateOfStay: [
                    "2024-10-12",
                    "2024-10-20"
                ],
                status: "CONFIRMADO",
                createdAt: "2024-06-23T03:09:19.897Z",
                updatedAt: "2024-06-23T03:09:19.897Z",
                deletedAt: "2024-06-23T03:09:19.897Z",
                __v: 0
            }
        ];

        mockingoose(BookingSchema).toReturn(bookings, 'find');

        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/booking/bookingList',
            body: {
                checkin: "2024-10-10",
                checkout: "2024-10-22"
            }
        });

        const response = httpMocks.createResponse();

        await bookingController.bookingListByDate(request, response);

        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response._getData())).toEqual({
            message: bookings,
            code: "SUCCESS",
        });
    });

    it('should return 404 if no bookings are found within the specified date range', async () => {
        mockingoose(BookingSchema).toReturn([], 'find');

        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/booking/bookingList',
            body: {
                checkin: "2024-11-01",
                checkout: "2024-11-05"
            }
        });

        const response = httpMocks.createResponse();

        await bookingController.bookingListByDate(request, response);

        expect(response.statusCode).toBe(404);
        expect(JSON.parse(response._getData())).toEqual({
            message: "bookings not found.",
            code: "NOT_FOUND_ERROR",
            data: null,
        });
    });

    it('should handle internal errors', async () => {
        mockingoose(BookingSchema).toReturn(new Error('Internal error'), 'find');

        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/booking/bookingList',
            body: {
                checkin: "2024-10-10",
                checkout: "2024-10-22"
            }
        });

        const response = httpMocks.createResponse();

        await bookingController.bookingListByDate(request, response);

        expect(response.statusCode).toBe(500);
        expect(JSON.parse(response._getData())).toEqual({
            message: "Internal error.",
            code: "INTERNAL_SERVER_ERROR",
            data: null,
        });
    });
});
