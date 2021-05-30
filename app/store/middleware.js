import { applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

export default () => {
  const middleware = []

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger({
      level: 'log',
      duration: true,
      collapsed: true,
      diff: true
    }))
  }

  return applyMiddleware(...middleware)
}
