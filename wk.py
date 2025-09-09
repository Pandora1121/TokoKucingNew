
import time
import sys


lyrics = [
    ("\この橋の向こうに", 0.09),
    (" 喜びが 嗚呼 夏のなら 嗚呼", 0.10),
    ("風縁 痛みは感じて", 0.10),
    (" 今は泣いてもいい", 0.11),
    (" Cry for me", 0.09),
]

delays = [1.5, 1.1, 1.1, 1.1, 1.1]

def animate_text(text, char_delay):
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(char_delay)
    sys.stdout.write('\n')
    sys.stdout.flush()

def main():
    for i, (text, char_delay) in enumerate(lyrics):
        animate_text(text, char_delay)
        if i < len(lyrics) - 1:
            # Calculate the time until the next line should start
            next_line_delay = max(0, delays[i] - len(text) * char_delay)
            time.sleep(next_line_delay)

if __name__ == "__main__":
    main()
