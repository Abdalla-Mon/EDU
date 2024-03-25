'use server'


import {revalidatePath} from 'next/cache'
import {redirect} from 'next/navigation'

import {createServerClient} from "../../../lib/supabase/server";

export async function login(data) {
    const supabase = createServerClient()


    const {error} = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signup(data) {
    const supabase = createServerClient()

    const {error} = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}