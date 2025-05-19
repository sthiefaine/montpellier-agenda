export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[30px] bg-gray-50 border-t z-50">
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-center h-full text-xs text-gray-600">
          <p className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Agenda Montpellier</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
