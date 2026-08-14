import { auth } from "@/lib/auth";
import { AdminShell } from "@/components/admin/AdminShell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    return children;
  }

  return <AdminShell adminName={session.user.name ?? session.user.email ?? "Admin"}>{children}</AdminShell>;
}
