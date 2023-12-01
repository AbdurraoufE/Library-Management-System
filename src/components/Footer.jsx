import { Container } from '@/components/Container'

// This function shows the footer of the website which is located at the bottom
export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="mt-64">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Brought to you by ScrumLords Computing
          </p>
        </div>
      </Container>
    </footer>
  )
}
