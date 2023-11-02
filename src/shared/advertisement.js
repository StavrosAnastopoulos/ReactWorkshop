import { MenuItem } from "./menu-item";

export function Advertisement() {
    const advertisments = {
        children: [
            {
                label: 'The Overflow Blog',
                classes: 'adv-header',
                children: [
                    {
                        label: 'Edge and beyond: How to meet the increasing demand for memory',
                    },
                    {
                        label: 'AI is only as good as the data: Q&A with',
                    }
                ]
            },
            {
                label: 'Featured on Meta',
                classes: 'adv-header',
                children: [
                    {
                        label: 'Changes to MSE deployment process may cause intermittent issues on',
                    },
                    {
                        label: 'Update: New Colors Launched',
                    },
                    {
                        label: 'Temporary policy: Generative AI (e.g., ChatGPT) is banned',
                    }
                ]
            }
        ]
    }
    return (
        <div className="adv-list">
            <MenuItem item={advertisments} level={-1} />
          </div>
    );
}