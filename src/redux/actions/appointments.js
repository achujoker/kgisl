import { LIST_TYPE} from "../types/listTypes"

export const saveAppointments = (data) => {
return {
    type: LIST_TYPE.SAVE_APPOINTMENTS,
    payload: data
}
}