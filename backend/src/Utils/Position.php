<?php

declare(strict_types=1);

namespace App\Utils;

enum Position: string
{
    case GOALKEEPER = 'Goalkeeper';
    case DEFENDER = 'Defender';
    case MIDFIELDER = 'Midfielder';
    case ATTACKER = 'Attacker';
    case UNKNOWN = 'Unknown';
}
