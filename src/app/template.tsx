/**
 * `template.tsx` remounts on every navigation, which triggers the entrance
 * animation and gives the site a soft page transition without any extra
 * JavaScript.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
