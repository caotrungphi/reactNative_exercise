import Realm from "realm"
import React, { useDebugValue } from "react";
import { View } from "react-native";

const SchemaUser = {
    name: "user",
    primaryKey: "Ma_so",
    properties: {
        Ma_so: "string",
        Ho_ten: "string",
    },
}

const realm = new Realm({ path: 'UserDatabase.realm', schema: [SchemaUser], schemaVersion:1})


export const creatUser = async user => new Promise((resole, reject) => {
    try {
        realm.write(() => {
            const _user = realm.create("user", user)
            resole(_user)
        })
    } catch (error) {
        reject(error)
    }
})

export const readAllUser = async () => new Promise((resole, reject) => {
    try {
        const _user = realm.objects("user")
        resole(_user)
    } catch (error) {
        reject(error)
    }
})

export const updateUser = async user => new Promise((resole, reject) => {
    try {
        realm.write(() => {
            const _user = realm.create("user", user, "modified")
            resole(_user)
        })
    } catch (error) {
        reject(error)
    }
})

export const deleteUser = async id => new Promise((resole, reject) => {
    try {
        realm.write(() => {
            const _user = realm.objects("user").filtered(`Ma_so == '${id}'`)
            realm.delete(_user)
            resole(true)
        })
    } catch (error) {
        reject(error)
    }
})

export default realm