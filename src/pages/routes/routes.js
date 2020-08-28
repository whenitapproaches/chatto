export const publicRoutes = [
]

export const authRoutes = [
  {
    path: '/sign-in',
    loader: () => import('../WelcomePage')
  },
  {
    path: '/sign-up',
    loader: () => import('../WelcomePage')
  }
]

export const privateRoutes = [
  {
    path: '/home',
    loader: () => import('../ProfilePage')
  }
]