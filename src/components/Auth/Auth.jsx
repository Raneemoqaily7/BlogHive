"use client";
import Link from 'next/link';
import styles from './auth.module.css';
import { useState } from "react";
import { signOut, useSession } from 'next-auth/react';

const Auth = () => {
    const [open, setOpen] = useState(false)
    const { status } = useSession()


    return (
        <>
            {status === "unauthenticated" ? (
                <>
                    <Link
                        href="/login"
                        className={styles.link}
                        onClick={() => setOpen(false)}>
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className={styles.link}
                        onClick={() => setOpen(false)}>
                        Sign Up
                    </Link>
                </>
            ) : (
                <>
                    <Link href="/write" className={styles.link}> Write</Link>
                    <span
                        className={styles.link}
                        onClick={() => {
                            setOpen(false);
                            signOut({ callbackUrl: "/" });
                        }}>
                        Logout
                    </span>
                </>
            )
            }

            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}> </div>
                <div className={styles.line}> </div>
                <div className={styles.line}> </div>
            </div>

            {open && (
                <div className={styles.responsiveMnue}>
                    <Link href='/'>HomePage</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>


                    {status === "unauthenticated" ? (
                        <div onClick={() => setOpen(false)}>
                            <Link href="/login">Login</Link>
                        </div>
                    )
                        :
                        (
                            <>
                                <div onClick={() => setOpen(false)}>
                                    <Link href="/write">Write</Link>
                                </div>
                                <span
                                    className={styles.link}
                                    onClick={() => {
                                        setOpen(false);
                                        signOut({ callbackUrl: "/" });
                                    }}>
                                    Logout
                                </span>
                            </>
                        )
                    }
                </div>
            )}
        </>
    );

}

export default Auth;