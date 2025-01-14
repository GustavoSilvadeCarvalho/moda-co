import Template from '@/emailTemplate/Template'
import { NextResponse } from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.EMAIL_API_KEY)

export async function POST() {
    try {
        const data = await resend.emails.send({
            from:`${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_EMAIL}>`,
            to: ['gustacar2008@gmail.com'],
            subject: 'Obrigado pela visita',
            react: Template({name: 'Gustavo'}),
        });

        return NextResponse.json({data});
    } catch (e) {
        return NextResponse.json({e});
    }
}