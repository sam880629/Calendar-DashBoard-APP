import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    roomData: [
        {
            floor: "ECD",
            icon_path:
                '<svg width="24" height="24" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 5.78V3C19 1.35 17.65 0 16 0H12C11.23 0 10.53 0.3 10 0.78C9.47 0.3 8.77 0 8 0H4C2.35 0 1 1.35 1 3V5.78C0.39 6.33 0 7.12 0 8V14H2V12H18V14H20V8C20 7.12 19.61 6.33 19 5.78ZM12 2H16C16.55 2 17 2.45 17 3V5H11V3C11 2.45 11.45 2 12 2ZM3 3C3 2.45 3.45 2 4 2H8C8.55 2 9 2.45 9 3V5H3V3ZM2 10V8C2 7.45 2.45 7 3 7H17C17.55 7 18 7.45 18 8V10H2Z" fill="#686868"/></svg>',
            rooms: [
                {
                    name: "Speed",
                    status: "locked",
                    number: 102,
                    locked: false,
                    bookings: {
                        "2024-5-18": [
                            {
                                startDate: "2024-05-18T14:00",
                                endDate: "2024-05-19T10:00",
                                count: 2,
                                occupied: true,
                                guest: {
                                    name: "Trista, Hung",
                                    phone: "0970412412",
                                    reservationId: "Conf.#1022110",
                                },
                                status: "CheckOut",
                                reservationType:"Individual",
                            }
                        ],
                        "2024-5-19": [
                            {
                                startDate: "2024-05-18T14:00",
                                endDate: "2024-05-19T10:00",
                                count: 0,
                                occupied: true,
                                guest: {
                                    name: "Trista, Hung",
                                    phone: "0970412412",
                                    reservationId: "Conf.#1022110",
                                },
                                status: "CheckOut",
                                reservationType:"Individual",
                            }
                        ],
                        "2024-5-20": [
                            {
                                startDate: "2024-05-20T14:00",
                                endDate: "2024-05-21T10:00",
                                count: 1,
                                occupied: true,
                                guest: {
                                    name: "Trista, Hung",
                                    phone: "0970412412",
                                    reservationId: "Conf.#1022110",
                                },
                                status: "Future",
                                reservationType:"Individual",
                            },
                            {
                                startDate: "2024-05-20T16:00",
                                endDate: "2024-05-21T12:00",
                                count: 3,
                                occupied: false,
                                guest: {
                                    name: "John, Doe",
                                    phone: "0970412432",
                                    reservationId: "Conf.#1022111",
                                },
                                status: "CheckIn",
                                reservationType:"Individual",
                            },
                        ],
                        "2024-5-21": [
                            {
                                startDate: "2024-05-20T14:00",
                                endDate: "2024-05-21T10:00",
                                count: 5,
                                guest: {
                                    name: "Trista, Hung",
                                    phone: "0970412412",
                                    reservationId: "Conf.#1022110",
                                },
                                status: "Future",
                                reservationType:"Individual",
                            },
                            {
                                startDate: "2024-05-20T16:00",
                                endDate: "2024-05-21T12:00",
                                count: 3,
                                guest: {
                                    name: "John, Doe",
                                    phone: "0970412432",
                                    reservationId: "Conf.#1022111",
                                },
                                status: "Future",
                                reservationType:"Individual",
                            },
                        ],
                    }
                },
                {
                    name: "Discovery",
                    number: 202,
                    status: "occupied",
                    locked: false,
                    bookings: {
                        "2024-5-18": [
                            {
                                startDate: "2024-05-20T14:00",
                                endDate: "2024-05-21T10:00",
                                count: 5,
                                occupied: true,
                                guest: {
                                    name: "Trista, Hung",
                                    phone: "0970412412",
                                    reservationId: "Conf.#1022110",
                                },
                                status: "CheckOut",
                                reservationType:"Individual",
                            },
                            {
                                startDate: "2024-05-20T16:00",
                                endDate: "2024-05-21T12:00",
                                count: 3,
                                occupied: false,
                                guest: {
                                    name: "John, Doe",
                                    phone: "0970412432",
                                    reservationId: "Conf.#1022111",
                                },
                                status: "CheckOut",
                                reservationType:"Individual",
                            },
                        ],
                    },
                },
            ],
        },
        {
            floor: "STD",
            icon_path:
                '<svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 10.638V8.3C14.5 6.76 13.6 5.5 12.5 5.5H7.5C6.4 5.5 5.5 6.76 5.5 8.3V10.638C4.62 11.128 4 12.318 4 13.718V19.5H5.5V17.4H14.5V19.5H16V13.718C16 12.318 15.38 11.128 14.5 10.638ZM13 7.6V10.4H7V7.6H13ZM5.5 13.718C5.5 13.046 5.89 12.5 6.37 12.5H13.64C14.12 12.5 14.51 13.046 14.51 13.718V15.3H5.51V13.718H5.5Z" fill="#686868"/><path d="M29.5 10.638V8.3C29.5 6.76 28.6 5.5 27.5 5.5H22.5C21.4 5.5 20.5 6.76 20.5 8.3V10.638C19.62 11.128 19 12.318 19 13.718V19.5H20.5V17.4H29.5V19.5H31V13.718C31 12.318 30.38 11.128 29.5 10.638ZM28 7.6V10.4H22V7.6H28ZM20.5 13.718C20.5 13.046 20.89 12.5 21.37 12.5H28.64C29.12 12.5 29.51 13.046 29.51 13.718V15.3H20.51V13.718H20.5Z" fill="#686868"/></svg>',
            rooms: [
                {
                    name: "Racing - Beyond",
                    number: 216,
                    status: "available",
                    locked: false,
                    bookings: {
                        "2024-5-25": [
                            {
                                startDate: "2024-05-25T14:00",
                                endDate: "2024-05-25T10:00",
                                count: 5,
                                occupied: true,
                                guest: {
                                    name: "Trista, Hung",
                                    phone: "0970412412",
                                    reservationId: "Conf.#1022110",
                                },
                                status: "Future",
                                reservationType:"Group",
                            },
                            {
                                startDate: "2024-05-28T16:00",
                                endDate: "2024-05-30T12:00",
                                count: 3,
                                occupied: false,
                                guest: {
                                    name: "John, Doe",
                                    phone: "0970412432",
                                    reservationId: "Conf.#1022111",
                                },
                                 status: "Future",
                                 reservationType:"Group",
                            },
                        ],
                    },
                },
                // 其他房間
            ],
        },
    ],
    dates: [
        "2024-5-18",
        "2024-5-19",
        "2024-5-20",
        "2024-5-21",
        "2024-5-22",
        "2024-5-23",
        "2024-5-24",
        "2024-5-25",
        "2024-5-26",
        "2024-5-27",
        "2024-5-28",
        "2024-5-29",
        "2024-5-30",
        "2024-5-31",
    ],
    currentLayout: 'desktop',
};

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setCurrentLayout(state, action) {
            state.currentLayout = action.payload;
        },
    },
});

export const { setRoomData, setDates, setCurrentLayout } = roomSlice.actions;

export default roomSlice.reducer;