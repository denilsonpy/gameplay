import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { SingIn } from "../screens/SignIn";

import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <SingIn />}
    </NavigationContainer>
  );
}
