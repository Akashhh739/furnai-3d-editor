import { useState, Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import { Scene } from '@/components/editor/Scene'
import { RenderGallery } from '@/components/editor/RenderGallery'
import { RightSidebar } from '@/components/layout/RightSidebar'
import { FloatingUpgradeCard } from '@/components/layout/FloatingUpgradeCard'
import { PremiumModal } from '@/components/layout/PremiumModal'
import { FurnAIProcessingModal } from '@/components/layout/FurnAIProcessingModal'
import { FurnAIQueueModal } from '@/components/layout/FurnAIQueueModal'
import { GlobalToast } from '@/components/layout/GlobalToast'
import { WelcomeScreen } from '@/components/layout/WelcomeScreen'
import { useFloorplanStore } from '@/store/floorplanStore'

// Root-level error boundary so uncaught errors show a message instead of blank screen
class RootErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  state = { hasError: false, error: null as Error | null }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[RootErrorBoundary]', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, color: '#fff', background: '#111', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h1 style={{ color: '#ef4444' }}>Something went wrong</h1>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: 16, fontSize: 13, color: '#fca5a5' }}>
            {this.state.error?.message}
          </pre>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: 8, fontSize: 11, color: '#888' }}>
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: 24, padding: '8px 24px', background: '#3b82f6', border: 'none', borderRadius: 6, color: '#fff', cursor: 'pointer', fontSize: 14 }}
          >
            Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

function App() {
  // Fix: use individual selectors instead of destructuring entire store
  // This prevents App from re-rendering on every store change (which would
  // cause the Canvas inside Scene to reconcile unnecessarily)
  const showProcessingModal = useFloorplanStore(s => s.showProcessingModal)
  const showQueueModal = useFloorplanStore(s => s.showQueueModal)
  const setShowQueueModal = useFloorplanStore(s => s.setShowQueueModal)

  const [showPremiumModal, setShowPremiumModal] = useState(false)
  const [showUpgradeCard, setShowUpgradeCard] = useState(true)
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-background text-foreground relative">
      {showWelcome && <WelcomeScreen onStart={() => setShowWelcome(false)} />}

      <PremiumModal isOpen={showPremiumModal} onClose={() => setShowPremiumModal(false)} />
      <GlobalToast />

      <Topbar />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar onLogout={() => setShowWelcome(true)} />
        <Scene />
        <RightSidebar />

        {showUpgradeCard && (
          <FloatingUpgradeCard
            onUpgrade={() => setShowPremiumModal(true)}
            onClose={() => setShowUpgradeCard(false)}
          />
        )}
      </div>
      <RenderGallery />

      <FurnAIProcessingModal
        isOpen={showProcessingModal}
      />

      <FurnAIQueueModal
        isOpen={showQueueModal}
        onClose={() => setShowQueueModal(false)}
      />
    </div>
  )
}

export default function AppWithBoundary() {
  return (
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  )
}
