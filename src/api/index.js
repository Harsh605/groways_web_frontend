import { axiosBase } from "./config";


export const fetchOneUserData = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosBase.post(`/api/users/userdata`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            resolve(response.data);
        } catch (error) {
            reject(error)
        }
    })
}

export const fetchUsersList = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosBase.get(`api/users/allusers`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            resolve(response.data);
        } catch (error) {
            console.log(`error in fetch user list in axios config : ${error.message}`);
            reject(error)
        }
    })
}

export const fetchReferralList = async (data1) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosBase.get(`api/users/referrals/${data1.address}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            resolve(response.data);
        } catch (error) {
            console.log(`error in fetch refferal list in axios config : ${error.message}`);
            reject(error)
        }
    })
}

export const fetchSlotsInfoForDashboardBox = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reponse = await axiosBase.get(`/api/users/slotsofuser/${data.userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            resolve(reponse.data)
        } catch (error) {
            reject(error);
        }
    })
}

export const fetchPackageInfoForDashboardBox = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosBase.get(`/api/users/packageofuser/${data.address}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            resolve(response.data);
        } catch (error) {
            reject(error)
        }
    })
}

export const fetchTeamInfo = async (data1) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosBase.get(`/api/users/fetchTeamMember/${data1.address}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            resolve(response.data)
        } catch (error) {
            reject(error);
        }
    })
}

export const fetchAllActivities = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosBase.get(`api/users/fetchTransactionsFromContract`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            resolve(response.data);

        } catch (error) {
            console.log(`error in fetch all activities in axios config : ${error.message}`)
            reject(error);
        }
    })
}