import ServerProtectedComponent from '@/components/serverProtected';

export default function WishLayout({ children }: { children: React.ReactNode }) {
  return <ServerProtectedComponent>{children}</ServerProtectedComponent>;
}
