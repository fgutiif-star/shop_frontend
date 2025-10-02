import { makeAutoObservable } from "mobx";
import type {MeData} from "@/5_entities/user";

class UserStore {
    inited = false;
    isAuth = false;
    meData: MeData = {
        id: 0,
        username: "",
        email: "",
        full_name: "",
        role: "",
        is_active: false,
        created_at: "",
        modified_at: "",
        blocked_at: "",
    };

    constructor() {
        makeAutoObservable(this);
    }

    initAuthData = () => {
        this.inited = true;
    };

    setIsAuth = (value: boolean) => {
        this.isAuth = value;
    };

    setMeData = (data: MeData) => {
        this.meData = data
    }
}

export default new UserStore();
