import { FeedbackiWidget } from './components/FeedbackiWidget'

export function App() {
  return (
    <div className="h-screen relative bg-white">
      <h1>hello</h1>

      <FeedbackiWidget
        projectId="f73011fd-8c04-4470-8708-b0de4e885a51"
        className="mr-2"
      >
        <button className="fixed right-0 top-1/2 z-40 flex flex-col items-center justify-center gap-2 rounded-bl-[10px] rounded-tl-[10px] bg-primary px-0 py-4 lg:px-2">
          <p
            className="rotate-180 transform text-xs font-medium text-white lg:text-sm"
            style={{ writingMode: 'vertical-rl' }}
          >
            Feedback
          </p>
        </button>
      </FeedbackiWidget>
    </div>
  )
}
