export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border-muted bg-app-bg py-8 text-center text-sm text-muted-fg mt-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p>&copy; {currentYear} Chandisa Randeni. All rights reserved.</p>
      </div>
    </footer>
  );
}
