import asyncio
import os
import sys
from google.antigravity import Agent, LocalAgentConfig

async def main():
    print("🚀 Initializing M2 AI Task Force - QA Challenger Live Agent...")
    
    # Configure the Agent with standard tools and system instructions
    config = LocalAgentConfig(
        system_instructions=(
            "You are the M2 QA Challenger Agent, part of the M2 AI Task Force. Your job is to verify "
            "that the newly cloned Next.js + Convex codebase for Smart School SMS matches the original "
            "layout, contains zero fake placeholder strings, has fully functioning routing, and contains no "
            "TypeScript errors. Inspect the file system under /Volumes/MAC DATA/Antigraphity/M2_PROJECTS_HUB/01_ACTIVE_MISSIONS/smart-school-sms/src/app/admin "
            "using your list_directory tool to verify all routing paths. "
            "Be critical, strict, and report any gaps, empty code scopes, or styling anomalies."
        ),
        app_data_dir="/Users/m2creative/.gemini/antigravity-ide/brain/661c788c-432d-4384-b19b-01a1353df4f8",
    )
    
    async with Agent(config=config) as agent:
        prompt = (
            "Scan the directory '/Volumes/MAC DATA/Antigraphity/M2_PROJECTS_HUB/01_ACTIVE_MISSIONS/smart-school-sms/src/app/admin' "
            "and list the verified route paths. Check if there are any missing layout files or empty page implementations."
        )
        print(f"💬 Prompting QA Agent: '{prompt}'\n")
        
        response = await agent.chat(prompt)
        
        print("🤖 QA CHALLENGER OUTPUT:\n" + "="*50)
        async for token in response:
            print(token, end="", flush=True)
        print("\n" + "="*50)

if __name__ == "__main__":
    # Ensure stdout outputs immediately
    sys.stdout.reconfigure(line_buffering=True)
    asyncio.run(main())
