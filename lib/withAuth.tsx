import React, { useEffect } from "react";
import { useAuth } from "contexts/auth/AuthContext";
import { useRouter } from "next/router";
import AppSkeleton from "components/core/app-skeleton";

const withAuth = (Component: any) => (props: any) => {
  const { isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading]);

  if (isAuthenticated) {
    return <Component {...props} />;
  }

  return <AppSkeleton />;
};

export default withAuth;
