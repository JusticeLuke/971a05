# Question 1

If the data came from an API, the application would need to handle loading and error states for if the api takes a long time or is down. If I didn't have a library like react-query I would use a useEffect hook. Otherwise I would fetch the data on mount.

# Question 2

The current implementation will generate a new key on every render of the component. React needs a static key to be bound to dynamically generated elements, so it can determine which elements to hold onto in the shadow dom or if it needs to recreate them. With the current implmentation, it will apply the same key to each element, which could cause react to move things around unnecessarily or rerender each list item every render.
