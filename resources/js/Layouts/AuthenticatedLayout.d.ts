import { ReactNode } from 'react';

interface AuthenticatedLayoutProps {
    auth: {
        user: {
            name: string;
            email: string;
        }
    };
    children: ReactNode;
    header?: ReactNode;
}

declare const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps>;
export default AuthenticatedLayout; 