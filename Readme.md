## Execution:

node index.js in root directory

## Insights:

The folder is called public (by convention) because everything inside it is publicly accessible to the client — meaning the browser can load files from it directly, it is sent to the client

## Deployment:

1. SSH into EC2:
   
   ssh -i "julian-pc.pem" ubuntu@ec2-13-60-2-93.eu-north-1.compute.amazonaws.com

## Links:

https://platform.openai.com/api-keys

https://eu-north-1.console.aws.amazon.com/ec2/home?region=eu-north-1#Home:https://eu-north-1.console.aws.amazon.com/ec2/home?region=eu-north-1#Home:

[Step-by-Step Guide: Deploying a Full-Stack App on AWS EC2. - DEV Community](https://dev.to/backendbro/step-by-step-guide-deploying-a-full-stack-app-on-aws-ec2-21e1)

## Roadmap

- [x] delete Tasks

- [ ] set a "latest point in time to complete task" -> google calendar integration

- [ ] pending status (status in general) maybe do today status

- [ ] sort the list by(status, difficulty, id, ..)

- [ ] each task has popupwindow with additional description(maybe settings) to reflect why task is difficult

- [ ] renewable tasks

- [ ] xp score/money score

- [ ] rewards somehow maybe with euros

- [ ] schedule tasks

- [ ] sub-tasks

- [ ] set difficulty of task

- [ ] Telegram bot notification
