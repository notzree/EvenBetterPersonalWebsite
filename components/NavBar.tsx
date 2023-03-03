export default function NavBar() {
  return (
    <div className="navbar bg-neutral text-primary-content px-10">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-primary">
          Put logo here
        </a>
      </div>
      <div className="flex-none">
      <a className="btn btn-ghost normal-case text-md text-primary">My Experiences</a>
      <a className="btn btn-ghost normal-case text-md text-primary">Contact</a>
      <a className="btn btn-ghost normal-case text-md text-primary">Resume</a>
      </div>
    </div>
  );
}
