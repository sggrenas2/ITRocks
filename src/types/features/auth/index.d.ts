interface AuthState{
    id: string;
    name: string;
    email: string;
    token: string;
    image: string;
    status: 'loading' | 'succeeded' | 'failed' | 'default';
    session: Session | null
}
