import React, { useEffect, useState } from "react";

// Example 1: Class component lifecycle (mount, update, unmount)
type ClassProps = { initialCount?: number };

export class LifecycleClass extends React.Component<ClassProps, { count: number }> {
	timerId?: number;

	constructor(props: ClassProps) {
		super(props);
		this.state = { count: props.initialCount ?? 0 };
	}

	// Mount: run once after component is added to the DOM
	componentDidMount() {
		console.log("LifecycleClass mounted");
		// Example: start a timer that increments count every second
		this.timerId = window.setInterval(() => {
			this.setState((s) => ({ count: s.count + 1 }));
		}, 1000);
	}

	// Update: runs after props or state changes
	componentDidUpdate(prevProps: ClassProps, prevState: { count: number }) {
		if (prevState.count !== this.state.count) {
			console.log("LifecycleClass updated - count is now", this.state.count);
		}
	}

	// Unmount: cleanup timers, subscriptions, etc.
	componentWillUnmount() {
		console.log("LifecycleClass will unmount");
		if (this.timerId) {
			clearInterval(this.timerId);
		}
	}

	render() {
		return (
			<div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6 }}>
				<h3>Class Lifecycle Example</h3>
				<p>Count: {this.state.count}</p>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Increment
				</button>
			</div>
		);
	}
}

// Example 2: Functional component using useEffect to mirror lifecycle
export function LifecycleFunctional({ initialCount = 0 }: { initialCount?: number }) {
	const [count, setCount] = useState<number>(initialCount);

	// Mount: empty deps array runs once
	useEffect(() => {
		console.log("LifecycleFunctional mounted");
		const id = window.setInterval(() => setCount((c) => c + 1), 1000);

		// Cleanup runs on unmount
		return () => {
			console.log("LifecycleFunctional will unmount");
			clearInterval(id);
		};
	}, []);

	// Effect that runs when `count` changes (update)
	useEffect(() => {
		console.log("LifecycleFunctional updated - count:", count);
	}, [count]);

	return (
		<div style={{ border: "1px solid #cfe", padding: 12, borderRadius: 6 }}>
			<h3>Functional Lifecycle (useEffect)</h3>
			<p>Count: {count}</p>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
		</div>
	);
}

// Small demo wrapper that shows mounting/unmounting both examples
export function LifecycleDemo() {
	const [show, setShow] = useState(true);

	return (
		<div style={{ display: "grid", gap: 12 }}>
			<h2>React Lifecycle Demo</h2>
			<button onClick={() => setShow((s) => !s)}>
				{show ? "Unmount examples" : "Mount examples"}
			</button>

			{show && (
				<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
					<LifecycleClass initialCount={0} />
					<LifecycleFunctional initialCount={10} />
				</div>
			)}
		</div>
	);
}

export default LifecycleDemo;
