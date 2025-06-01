import { Link } from 'react-router'

const Notfound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-accent-foreground">
        Go back to{' '}
        <Link to="/" className="darl:text-sky-400 text-sky-500">
          Dashboard
        </Link>{' '}
      </p>
    </div>
  )
}

export default Notfound
